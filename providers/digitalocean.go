//just for sustech (modified from digitalocean)

package providers

import (
	"context"
	"errors"
	"net/url"

	"github.com/oauth2-proxy/oauth2-proxy/v7/pkg/apis/sessions"
	"github.com/oauth2-proxy/oauth2-proxy/v7/pkg/requests"
)

// DigitalOceanProvider represents a DigitalOcean based Identity Provider
type DigitalOceanProvider struct {
	*ProviderData
}

var _ Provider = (*DigitalOceanProvider)(nil)

const (
	digitalOceanProviderName = "DigitalOcean"
	digitalOceanDefaultScope = ""
)

var (
	// Default Login URL for DigitalOcean.
	// Pre-parsed URL of https://cloud.digitalocean.com/v1/oauth/authorize.
	digitalOceanDefaultLoginURL = &url.URL{
		Scheme: "https",
		Host:   "cas.sustech.edu.cn",
		Path:   "/cas/oauth2.0/authorize",
	}

	// Default Redeem URL for DigitalOcean.
	// Pre-parsed URL of  https://cloud.digitalocean.com/v1/oauth/token.
	digitalOceanDefaultRedeemURL = &url.URL{
		Scheme: "https",
		Host:   "cas.sustech.edu.cn",
		Path:   "/cas/oauth2.0/accessToken",
	}

	// Default Profile URL for DigitalOcean.
	// Pre-parsed URL of https://cloud.digitalocean.com/v2/account.
	digitalOceanDefaultProfileURL = &url.URL{
		Scheme: "https",
		Host:   "cas.sustech.edu.cn",
		Path:   "/cas/oauth2.0/profile",
	}
)

// NewDigitalOceanProvider initiates a new DigitalOceanProvider
func NewDigitalOceanProvider(p *ProviderData) *DigitalOceanProvider {
	p.setProviderDefaults(providerDefaults{
		name:        digitalOceanProviderName,
		loginURL:    digitalOceanDefaultLoginURL,
		redeemURL:   digitalOceanDefaultRedeemURL,
		profileURL:  digitalOceanDefaultProfileURL,
		validateURL: digitalOceanDefaultProfileURL,
		scope:       digitalOceanDefaultScope,
	})
	return &DigitalOceanProvider{ProviderData: p}
}

// GetEmailAddress returns the Account email address
func (p *DigitalOceanProvider) GetEmailAddress(ctx context.Context, s *sessions.SessionState) (string, error) {
	if s.AccessToken == "" {
		return "", errors.New("missing access token")
	}

	json, err := requests.New(p.ProfileURL.String()).
		WithContext(ctx).
		WithHeaders(makeOIDCHeader(s.AccessToken)).
		Do().
		UnmarshalJSON()
	if err != nil {
		return "", err
	}

	email, err := json.GetPath("attributes", "email").String()
	if err != nil {
		return "", err
	}
	return email, nil
}

// ValidateSession validates the AccessToken
func (p *DigitalOceanProvider) ValidateSession(ctx context.Context, s *sessions.SessionState) bool {
	return validateToken(ctx, p, s.AccessToken, makeOIDCHeader(s.AccessToken))
}

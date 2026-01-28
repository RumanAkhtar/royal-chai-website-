'use client'
import { JSX } from 'react';

export function SocialLinks() {
  const socials = [
    {
      name: 'Instagram',
      icon: 'instagram',
      url: '#',
      label: 'Follow us on Instagram'
    },
    {
      name: 'Facebook',
      icon: 'facebook',
      url: '#',
      label: 'Follow us on Facebook'
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      url: '#',
      label: 'Follow us on Twitter'
    },
    {
      name: 'Pinterest',
      icon: 'pinterest',
      url: '#',
      label: 'Follow us on Pinterest'
    }
  ]

  const SVGIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, JSX.Element> = {
      instagram: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645-.069-4.849-.069-3.205 0-3.584-.012-4.849-.069-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      facebook: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      twitter: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 002.856-3.86 10.02 10.02 0 01-2.836.856c1.012-.604 1.694-1.561 2.043-2.709-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      pinterest: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.365 0 11.998c0 5.211 3.435 9.587 8.035 10.88-.111-.9-.209-2.283.042-3.261.232-.822 1.494-6.33 1.494-6.33s-.389-.779-.389-1.83c0-1.717.994-2.99 2.233-2.99 1.052 0 1.56.789 1.56 1.734 0 1.055-.674 2.633-.102 4.095.566 1.32 1.896 2.454 3.376 2.454 4.048 0 7.09-4.418 7.09-10.628 0-5.559-4.543-10.506-11.02-10.506-7.826 0-12.41 5.853-12.41 11.942 0 9.339-5.97 16.995-14.286 16.995-2.793 0-5.424-1.443-7.32-3.954-.608.954-1.438 2.184-1.947 2.95.607 1.088 1.47 2.035 2.322 2.8 1.226 1.08 2.884 1.837 4.624 1.837 3.866 0 7-3.134 7-7v-41z" />
        </svg>
      )
    }

    return icons[icon] || null
  }

  return (
    <section className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h3 className="text-2xl font-serif font-bold text-foreground">
            Connect With Us
          </h3>

          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.label}
                className="w-12 h-12 rounded-full border-2 border-border text-foreground/60 hover:text-primary hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <SVGIcon icon={social.icon} />
              </a>
            ))}
          </div>

          <p className="text-foreground/50 text-center text-sm">
            © 2024 Royal Chai. Brew the Royal Tradition.
          </p>
        </div>
      </div>
    </section>
  )
}

import { useCopy } from '../../hooks/useCopy';
import { EMAIL, PHONE, PHONE_HREF, RESUME } from './data';

function CopyIcon() {
  return (
    <svg aria-hidden="true" className="h-3 w-3 shrink-0" viewBox="0 0 12 12" fill="none">
      <rect x="4" y="1" width="7" height="7" rx="0.7" stroke="currentColor" />
      <rect x="1" y="4" width="7" height="7" rx="0.7" stroke="currentColor" />
    </svg>
  );
}

export function Contact() {
  const { copied, copy } = useCopy(EMAIL);

  return (
    <section id="contact" className="s-sec s-contact" aria-labelledby="contact-title">
      <svg className="s-wave top" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 0H1440V30C1300 70 1120 74 920 44S520 2 320 36C200 56 100 60 0 40Z" fill="#f5f1e4" />
      </svg>
      <div className="s-wrap">
        <p className="s-label rv">
          <span aria-hidden="true" />
          Contact
        </p>
        <h2 id="contact-title" className="s-contact-title rv">
          Have a screen that needs to be clearer?
        </h2>
        <p className="s-lead rv">
          I&rsquo;m looking for an Associate Designer role. Tell me what you&rsquo;re building, or just say hello.
        </p>
        <div className="s-contact-actions rv">
          <a className="s-btn lime" href={RESUME} download="Shri-Lakshmi-Resume.pdf">
            Download resume
          </a>
          <a className="s-btn white" href={`mailto:${EMAIL}`}>
            Email me
          </a>
          <button
            type="button"
            className="s-btn ghost"
            onClick={copy}
            aria-label={copied ? 'Email copied to clipboard' : `Copy ${EMAIL} to clipboard`}
          >
            <span className="underline underline-offset-2">{EMAIL}</span>
            <CopyIcon />
            <span className="s-copied" aria-hidden="true" data-on={copied}>
              Copied
            </span>
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? 'Email copied to clipboard.' : ''}
          </span>
        </div>
        <p className="s-phone rv">
          Or call <a href={PHONE_HREF}>{PHONE}</a> <span aria-hidden="true">/</span> Chennai, Jaipur or remote
        </p>
      </div>
      <footer className="s-footer">
        <div className="s-wrap">
          <span>&copy; 2026 M. Shri Lakshmi</span>
          <span>UI/UX and web designer</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </section>
  );
}

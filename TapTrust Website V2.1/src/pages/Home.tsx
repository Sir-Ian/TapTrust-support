import type { ReactNode } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  ScanLine,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import {
  FREE_CHECK_COUNT,
  analyticsEvents,
  downloadLinks,
} from '../lib/marketing';
import '../styles/marketing.css';

const productScreens = {
  start: '/product-screens/taptrust-start-age-check.png',
  result: '/product-screens/taptrust-over-21-result.png',
  complete: '/product-screens/taptrust-check-complete.png',
} as const;

type CtaProps = {
  children: ReactNode;
  href: string;
  eventName: string;
  variant?: 'primary' | 'secondary' | 'text';
};

const Cta = ({ children, href, eventName, variant = 'primary' }: CtaProps) => (
  <a
    href={href}
    data-analytics-event={eventName}
    className={`marketing-cta marketing-cta--${variant}`}
  >
    {children}
  </a>
);

type ProductScreenProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
};

const ProductScreen = ({ src, alt, className = '', loading = 'lazy' }: ProductScreenProps) => (
  <div className={`marketing-product-screen ${className}`}>
    <img src={src} alt={alt} loading={loading} />
  </div>
);

const Hero = () => (
  <section className="marketing-hero">
    <div className="marketing-container marketing-hero__inner">
      <div className="marketing-hero__copy">
        <h1>Verify a guest’s age with the iPhone you already have.</h1>
        <p>
          TapTrust gives door staff a clear age result and photo-match workflow for supported mobile IDs. No scanner. No stored ID data.
        </p>
        <div className="marketing-hero__actions">
          <Cta href={downloadLinks.website_hero} eventName={analyticsEvents.appStoreCta}>
            Try {FREE_CHECK_COUNT} free checks <ArrowUpRight aria-hidden="true" />
          </Cta>
          <Cta href="#how-it-works" eventName={analyticsEvents.howItWorks} variant="secondary">
            See the 30-second flow <ArrowDown aria-hidden="true" />
          </Cta>
        </div>
        <span className="marketing-hero__proof">Available on the App Store · Built for iPhone</span>
      </div>

      <div className="marketing-hero__media">
        <ProductScreen
          src={productScreens.start}
          alt="TapTrust app inviting staff to start an age check"
          loading="eager"
        />
      </div>
    </div>
  </section>
);

const ProofRail = () => {
  const points = [
    { icon: ScanLine, text: 'No scanner hardware' },
    { icon: ShieldCheck, text: 'No ID data stored' },
    { icon: Smartphone, text: 'Built for iPhone' },
  ];

  return (
    <section className="marketing-proof-rail">
      <div className="marketing-container marketing-proof-rail__inner">
        {points.map(({ icon: Icon, text }) => (
          <div key={text} className="marketing-proof-rail__item">
            <Icon aria-hidden="true" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Flow = () => {
  const steps = [
    'Guest presents a supported digital ID.',
    'TapTrust returns a clear age result.',
    'Staff make a quick visual match.',
  ];

  return (
    <section id="how-it-works" className="marketing-flow">
      <div className="marketing-container marketing-flow__inner">
        <div className="marketing-flow__copy">
          <h2>The answer your staff needs, in seconds.</h2>
          <p>
            A guest presents a supported digital ID. TapTrust shows the age result, then gives staff a clear photo-match step.
          </p>
          <ol className="marketing-flow__steps">
            {steps.map((step, index) => (
              <li key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <small>Works with supported IDs in Apple Wallet. Availability varies by issuer and device.</small>
        </div>

        <div className="marketing-flow__screens">
          <figure>
            <ProductScreen src={productScreens.result} alt="TapTrust displaying an Over 21 age result" />
            <figcaption>A clear age result.</figcaption>
          </figure>
          <figure>
            <ProductScreen src={productScreens.complete} alt="TapTrust confirming that an age check is complete" />
            <figcaption>Ready for the next guest.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

const DoorRhythm = () => {
  const points = [
    {
      number: '01',
      title: 'Use the iPhone already at the door',
      body: 'No dedicated scanner or new hardware rollout is required.',
    },
    {
      number: '02',
      title: 'Choose the right age threshold',
      body: 'Support 18+, 21+, or 65+ workflows when your team needs them.',
    },
    {
      number: '03',
      title: 'Keep the line moving',
      body: 'Fast Mode helps your staff reset quickly for the next check.',
    },
  ];

  return (
    <section className="marketing-rhythm">
      <div className="marketing-container">
        <div className="marketing-rhythm__copy">
          <h2>Built for the rhythm at the door.</h2>
          <p>
            TapTrust turns a newer credential type into the familiar decision your team has to make: is this guest eligible, and does the person match?
          </p>
        </div>
        <div className="marketing-rhythm__points">
          {points.map((point) => (
            <article key={point.number}>
              <span>{point.number}</span>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCta = () => (
  <section className="marketing-final">
    <div className="marketing-container marketing-final__inner">
      <div className="marketing-final__copy">
        <h2>Try it during a real shift.</h2>
        <p>Start with {FREE_CHECK_COUNT} live checks, then decide whether TapTrust belongs at your door.</p>
        <div className="marketing-final__actions">
          <Cta href={downloadLinks.website_footer} eventName={analyticsEvents.freeTrialCta}>
            Try {FREE_CHECK_COUNT} free checks <ArrowUpRight aria-hidden="true" />
          </Cta>
          <Cta href="/faq" eventName={analyticsEvents.supportedCredentialsView} variant="text">
            See supported IDs <ChevronRight aria-hidden="true" />
          </Cta>
        </div>
        <strong>Clear decisions when the line is moving.</strong>
      </div>

      <div className="marketing-final__media">
        <ProductScreen src={productScreens.complete} alt="TapTrust confirming a completed age check" />
      </div>
    </div>
  </section>
);

export const Home = () => (
  <>
    <Hero />
    <ProofRail />
    <Flow />
    <DoorRhythm />
    <FinalCta />
  </>
);

import { Link } from 'react-router';

import ApplicationLogo from './application-logo';
import { GoBackButton } from './go-back-button';

type GuestHeaderProps = {
  title: string;
  description: string;
};

export const GuestHeader = ({ title, description }: GuestHeaderProps) => {
  return (
    <div className="relative space-y-4 bg-gradient-primary px-4 py-2 pb-8 text-clr-neutral">
      <header className="fixed left-1/2 top-0 z-[999] flex w-full max-w-[26rem] -translate-x-1/2 bg-gradient-primary py-1">
        <GoBackButton className="absolute left-0 top-1/2 -translate-y-1/2" />
        <Link to="/" className="mx-auto">
          <ApplicationLogo className="h-8 w-8 fill-current" />
        </Link>
      </header>
      <section className="pt-10">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm font-light">{description}</p>
      </section>
    </div>
  );
};

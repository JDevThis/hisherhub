import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import LoginForm from '@/app/ui/login-form';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">

    <div className=" flex justify-center flex-col md:flex-row">
        <div className="flex justify-center rounded-lg">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}> </p>
          <div>
            { <LoginForm /> }
          </div>
        </div>
      </div>
    </main>
  );
}

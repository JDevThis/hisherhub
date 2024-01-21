'use client';

import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import Search from '@/app/ui/search';

export default function SearchForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 ">
      <Image
            src="/hhhlogo.png"
            width={200 }
            height={200}
            className="block py-10"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              What service do you need?
            </label>
            <div className="relative">
            { <Search placeholder={''} /> }
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="id_location"
            >
              In what location?
            </label>
            <div className="relative">
                <select className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 my-2" id='id_location'>
                                            <option value="Cymru Wales">Cymru Wales</option>
                                            <option value="East of England">East of England</option>
                                            <option value="East Midlands">East Midlands</option>
                                            <option value="London">London</option>
                                            <option value="North East &amp; Cumbria">North East &amp; Cumbria</option>
                                            <option value="North West">North West</option>
                                            <option value="Northern Ireland">Northern Ireland</option>
                                            <option value="Scotland">Scotland</option>
                                            <option value="South East">South East</option>
                                            <option value="South West">South West</option>
                                            <option value="West Midlands">West Midlands</option>
                                            <option value="Yorkshire &amp; The Humber">Yorkshire &amp; The Humber</option>
            </select>
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="id_location"
            >
              For what gender?
            </label>
            <div className="relative flex gap-2">
            <FormButton />  
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
        <LoginButton />
        </div>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}
function FormButton() {
    return (
        <div className="flex gap-1 w-full">
            <Button className="w-full bg-blue-500">
            His <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
            <Button className="w-full bg-pink-500">
            Her <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
            <Button className="w-full bg-purple-500">
            Unisex <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
      </div>
    );
  }
function LoginButton() {
  return (
    <Button className="mt-4 bg-teal-500">
      Search <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

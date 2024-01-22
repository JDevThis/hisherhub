import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  UserIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import Image from 'next/image';
import Search from '@/app/ui/search';

export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg px-6 pb-4 ">
      <div className="w-full flex justify-center">
        <Image
            src="/hhhlogo.png"
            width={300}
            height={100}
            className="block py-[9px]"
            alt="HisHerHub Logo"
          />
          </div>
          <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="fname"
            >
              First Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="fname"
                type="text"
                name="fname"
                placeholder="Enter your first name"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="fname"
            >
              Surname
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="fname"
                type="text"
                name="fname"
                placeholder="Enter your surname"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="confpassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="confpassword"
                type="password"
                name="confpassword"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="bname"
            >
              Business name
            </label>
            <div className="relative">
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="bname"
                type="text"
                name="bname"
                placeholder="Enter your business name"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="blocation"
            >
              Business location
            </label>
            <div className="relative">
            <select className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" id='blocation'>
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
          <div>
          <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              What services do you provide?
            </label>
            <div className="relative">
            <div className="md:w-2/3 block text-gray-500 " >
                                        <div className="form-check m-2"><input id="formCheck-1" className="form-check-input me-2" type="checkbox" name="bservices[]" value="1-1 classes" /><label className="form-label form-check-label" htmlFor="formCheck-1">1-1 classes</label></div>
                                        <div className="form-check m-2"><input id="formCheck-24" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Custom colouring" /><label className="form-label form-check-label" htmlFor="formCheck-24">Custom colouring</label></div>
                                        <div className="form-check m-2"><input id="formCheck-23" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Custom wigs" /><label className="form-label form-check-label" htmlFor="formCheck-23">Custom wigs</label></div>
                                        <div className="form-check m-2"><input id="formCheck-22" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Pre-made units" /><label className="form-label form-check-label" htmlFor="formCheck-22">Pre-made units</label></div>
                                        <div className="form-check m-2"><input id="formCheck-21" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Natural hair maintenance" /><label className="form-label form-check-label" htmlFor="formCheck-21">Natural hair maintenance</label></div>
                                        <div className="form-check m-2"><input id="formCheck-20" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Ponytails" /><label className="form-label form-check-label" htmlFor="formCheck-20">Ponytails</label></div>
                                        <div className="form-check m-2"><input id="formCheck-19" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Sewins" /><label className="form-label form-check-label" htmlFor="formCheck-19">Sewins</label></div>
                                        <div className="form-check m-2"><input id="formCheck-18" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Hair wash" /><label className="form-label form-check-label" htmlFor="formCheck-18">Hair wash</label></div>
                                        <div className="form-check m-2"><input id="formCheck-17" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Relaxer" /><label className="form-label form-check-label" htmlFor="formCheck-17">Relaxer</label></div>
                                        <div className="form-check m-2"><input id="formCheck-16" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Lace frontal wig" /><label className="form-label form-check-label" htmlFor="formCheck-16">Lace frontal wig</label></div>
                                        <div className="form-check m-2"><input id="formCheck-15" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Lace closure" /><label className="form-label form-check-label" htmlFor="formCheck-15">Lace closure</label></div>
                                        <div className="form-check m-2"><input id="formCheck-14" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Shape ups" /><label className="form-label form-check-label" htmlFor="formCheck-14">Shape ups</label></div>
                                        <div className="form-check m-2"><input id="formCheck-13" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Skin fade" /><label className="form-label form-check-label" htmlFor="formCheck-13">Skin fade</label></div>
                                        <div className="form-check m-2"><input id="formCheck-12" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Trim" /><label className="form-label form-check-label" htmlFor="formCheck-12">Trim</label></div>
                                        <div className="form-check m-2"><input id="formCheck-11" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Beard shaping" /><label className="form-label form-check-label" htmlFor="formCheck-11">Beard shaping</label></div>
                                        <div className="form-check m-2"><input id="formCheck-10" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Waves" /><label className="form-label form-check-label" htmlFor="formCheck-10">Waves</label></div>
                                        <div className="form-check m-2"><input id="formCheck-9" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Braids" /><label className="form-label form-check-label" htmlFor="formCheck-9">Braids</label></div>
                                        <div className="form-check m-2"><input id="formCheck-8" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Wash and go" /><label className="form-label form-check-label" htmlFor="formCheck-8">Wash and go</label></div>
                                        <div className="form-check m-2"><input id="formCheck-7" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Dreadlocks" /><label className="form-label form-check-label" htmlFor="formCheck-7">Dreadlocks</label></div>
                                        <div className="form-check m-2"><input id="formCheck-6" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Mobile hair services" /><label className="form-label form-check-label" htmlFor="formCheck-6">Mobile hair services</label></div>
                                        <div className="form-check m-2"><input id="formCheck-5" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Weddings" /><label className="form-label form-check-label" htmlFor="formCheck-5">Weddings</label></div>
                                        <div className="form-check m-2"><input id="formCheck-4" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Photoshoots" /><label className="form-label form-check-label" htmlFor="formCheck-4">Photoshoots</label></div>
                                        <div className="form-check m-2"><input id="formCheck-3" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Prom" /><label className="form-label form-check-label" htmlFor="formCheck-3">Prom</label></div>
                                        <div className="form-check m-2"><input id="formCheck-2" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Grooming" /><label className="form-label form-check-label" htmlFor="formCheck-2">Grooming</label></div>
                                    </div>
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="bwebsite"
            >
              Website
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="bwebsite"
                type="text"
                name="bwebsite"
                placeholder="Enter your website (optional)"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="bwebsite"
            >
              Website
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="binstagram"
                type="text"
                name="binstagram"
                placeholder="Enter your instagram handle"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="bfacebook"
            >
              Facebook
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="bfacebook"
                type="text"
                name="bfacebook"
                placeholder="Enter your facebook handle (optional)"
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
        <RegButton />
        </div>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

function RegButton() {
  return (
    <Button type='submit' className="mt-4">
      Sign Up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
function FormButton() {
  return (
      <div className="flex gap-1 w-full">
          <Button className="w-full bg-blue-500 gap-2" type='button' name='bgender[]' value={'his'}>
          His <UserIcon className="ml-auto h-5 w-5 text-teal-500" />
          </Button>
          <Button className="w-full bg-pink-500 gap-2" type='button' name='bgender[]' value={'her'}>
          Her <UserIcon className="ml-auto h-5 w-5 text-purple-500" />
          </Button>
          <Button className="w-full bg-purple-500 gap-2" type='button' name='bgender[]' value={'unisex'}>
          Unisex <UserGroupIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
    </div>
  );
}
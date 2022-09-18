import { useForm } from 'react-hook-form';
import { HiOutlinePaperAirplane } from 'react-icons/hi';

const ContactMeForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-left my-4 px-6 grid gap-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
              placeholder="Your full name here"
              value=''
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              {...register('email')}
              id="email"
              className="p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
              placeholder="youremail@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                {...register('message')}
                rows={3}
                className="p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="What is your go to for toxin-free detergent? I'm looking for a new product that is safe for pets and people."
              />
            </div>
          </div>
        </div>
        <button className="border border-stone-400 mx-auto px-8 py-1 flex hover:bg-stone-200 hover:border-black">
          Send!{' '}
          <HiOutlinePaperAirplane className="h-5 w-5 ml-2" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};

export default ContactMeForm;

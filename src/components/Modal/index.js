/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import { CheckIcon } from '@heroicons/react/outline';
import Flag from 'react-world-flags';
import Button from '../form-controls/Button';

export default function Modal(props) {
	const { isOpen = false, data = {}, closeModal } = props;

	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog
				as='div'
				className='fixed z-10 inset-0 overflow-y-auto'
				onClose={closeModal}
			>
				<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='fixed inset-0 bg-subtle-teritiary bg-opacity-75 transition-opacity' />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className='hidden sm:inline-block sm:align-middle sm:h-screen'
						aria-hidden='true'
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						enterTo='opacity-100 translate-y-0 sm:scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 translate-y-0 sm:scale-100'
						leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
					>
						<div className='relative inline-block align-bottom bg-gray-teritiary rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6'>
							<div className='flex'>
								<div className='w-full flex align-middle'>
									<Flag code={data.code} />
								</div>
								<div className='w-full mt-3 text-left text-gray-primary sm:mt-5 pl-4 '>
									<Dialog.Title
										as='h3'
										className='text-2xl leading-6 font-semibold text-gray-900 mb-4'
									>
										{data.name}
									</Dialog.Title>
									<div className='mt-2 font-medium text-md space-y-2'>
										<div className='flex justify-start text-subtle-teritiary text-left'>
											<p className='w-1/2'>ISO:</p>
											<p className='w-full font-bold'>{data.code}</p>
										</div>
										<div className='flex justify-start text-subtle-teritiary text-left'>
											<p className='w-1/2'>Capital:</p>
											<p className='w-full font-bold '>{data.capital}</p>
										</div>
										<div className='flex justify-start text-subtle-teritiary text-left'>
											<p className='w-1/2'>Currency:</p>
											<p className='w-full font-bold '>{data.currency}</p>
										</div>
										<div className='flex justify-start text-subtle-teritiary text-left'>
											<p className='w-1/2'>Native:</p>
											<p className='w-full font-bold '>{data.native}</p>
										</div>
										<div className='flex justify-start text-subtle-teritiary text-left'>
											<p className='w-1/2'>Phone:</p>
											<p className='w-full font-bold '>+{data.phone}</p>
										</div>
										<div className='flex justify-start text-subtle-teritiary text-left'>
											<p className='w-1/2'>Continent:</p>
											<p className='w-full font-bold '>{data.continent.name}</p>
										</div>
										<div className='flex justify-start text-subtle-teritiary text-left'>
											<p className='w-1/2'>Languages:</p>
											<p className='w-full font-bold flex'>
												{data.languages.map((l) => l.name).join(', ')}
											</p>
										</div>
										{data.states.length !== 0 && (
											<div className='flex justify-start text-subtle-teritiary text-left'>
												<p className='w-1/2'>States:</p>
												<p className='w-full font-bold flex gap-1'>
													{data.states.map((l) => l.name).join(', ')}
												</p>
											</div>
										)}
									</div>
								</div>
							</div>
							<div className='mt-5 sm:mt-6 flex justify-center'>
								<Button className='btn btn--subtle' action={() => closeModal()}>
									Close
								</Button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

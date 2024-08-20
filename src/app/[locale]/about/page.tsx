import { useTranslations } from 'next-intl';
import React from 'react';

export default function About() {
  const t = useTranslations('');

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='bg-white border border-gray-300 shadow-lg rounded-lg p-8 md:p-16 text-center max-w-3xl animate-fadeIn'>
        <div className='text-4xl mb-6 text-gray-800'>
          {t('Raise Your Voice')}
        </div>
        <p className='text-2xl leading-relaxed text-gray-700 mb-6'>
          {t(
            'Mamta Kafle’s sudden disappearance has left a community searching for answers, and we refuse to stay silent. '
          )}
          <span className='text-blue-600 font-semibold'>
            {t('Together, we can amplify the call for justice and bring Mamta back home.')}
          </span>
          <br />
          {t(
            'Join us in spreading awareness—share the hashtag '
          )}
          <span className='text-pink-500 font-bold'>
            #findmamtakafle
          </span>
          {t(', stay informed, and stand with us.')}
          <br />
          <span className='text-blue-600 font-semibold'>
            {t('If no one will do anything - WE WILL!')}
          </span>
        </p>
        <p className='text-xl text-gray-600'>
          {t(
            'This page is dedicated to uniting everyone who believes in the power of community and the importance of never giving up on one of our own.'
          )}
          <br />
          <span className='text-pink-500 font-bold'>
            {t('Together, we can make a difference.')}
          </span>
        </p>
        <div className='mt-8 text-3xl text-center animate-pulse'>
          <span role="img" aria-label="heart">❤️❤️❤️</span>
        </div>
      </div>
    </div>
  );
}

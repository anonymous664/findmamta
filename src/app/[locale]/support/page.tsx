import { useTranslations } from 'next-intl';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Support() {
  const t = useTranslations('');

  return (
    <div className='min-h-screen flex flex-col'>
      <main className='px-8 md:px-32 py-24 flex-grow'>
        <div className='text-center text-2xl mb-12'>
          {t(
            'We appreciate your support in helping us find Mamta Kafle. Your involvement is invaluable.'
          )}
        </div>

        <div className='text-center mb-16'>
          <h2 className='text-4xl font-extrabold mb-6'>{t('Support Us')}</h2>
          <div className='bg-gray-100 rounded-lg p-12 max-w-3xl mx-auto'>
            <div className='text-xl text-left'>
              <h3 className='text-2xl font-semibold mb-6 text-center'>
                {t('How You Can Help')}
              </h3>
              <p className='text-lg leading-relaxed'>
                {t(
                  'You can support the search efforts by spreading the word on social media. Follow us on Instagram to stay updated and share our posts to increase visibility.'
                )}
              </p>
            </div>
            <div className='mt-8 text-center'>
              <a
                href='https://www.instagram.com/findmamtakafle/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-lg font-medium rounded-full hover:opacity-90 transition duration-300 ease-in-out transform hover:scale-105'
              >
                {t('Follow Us on Instagram')}
                <InstagramIcon className='w-6 h-6 ml-3' />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

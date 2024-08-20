import { useTranslations } from 'next-intl';
import Button from './components/Button';
import { Footer } from './components/Footer';

export default function DashboardPage() {
  const t = useTranslations('');
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24 animate-slideIn'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('We can find')}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Mamta Kafle')}
          </span>
          <br />
          {t('with YOUR help!')}
        </h1>
        <p className='text-center text-2xl font-semibold mt-4 animate-pulse'>
          #findmamtakafle
        </p>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'If you have any info or insight, please feel free to share and notify us - we will post!'
          )}
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://form.jotform.com/242265270893158'
            target='_blank'
          >
            <Button rounded size='large'>
              {t('Anonymous Tip')}
            </Button>
          </a>
          <a
            href='https://www.instagram.com/findmamtakafle/'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('Follow Us')}
            </Button>
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10 animate-fadeIn'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Help')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'This is a page dedicated in finding the missing Mamta Kafle. If you have any info, feel free submit a anonymous tip to authorities!'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Support')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'There has been growing internet support in helping in finding Mamta. Lets put the power of social media to use and find her together.'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Find')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Post on your Facebook/Instagram/Twitter. Where ever you can to spread the word so people are on the look out.'
              )}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

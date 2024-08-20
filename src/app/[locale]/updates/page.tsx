import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function About() {
  const t = useTranslations('')

  return (
    <div className='px-8 md:px-32 py-24'>
      <div className='text-center text-2xl mb-12'>
        {t('We will post updates about the case as they come in. <3')}
      </div>

      <div className='text-center mb-16'>
        <h2 className='text-4xl font-extrabold mb-6'>
          {t('Latest Updates')}
        </h2>
        <div className='bg-gray-100 rounded-lg p-8'>
          <div className='mb-6'>
            <Image
              src='/images/mamta.jpg' 
              alt='Latest Update'
              width={600}  
              height={300}  
              className='rounded-lg shadow-lg mx-auto'
            />
          </div>
          <div className='text-xl text-left'>
            <h3 className='text-2xl font-semibold mb-4'>
              {t('Update 1: Search Efforts Continue')}
            </h3>
            <p>
              {t(
                'Search efforts for Mamta Kafle continue as authorities and volunteers comb through the nearby DMV areas. We are grateful for the outpouring of support and will keep everyone updated with the latest information.'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

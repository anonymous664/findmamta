import { useTranslations } from 'next-intl'
import Image from 'next/image'


export default function About() {
  const t = useTranslations('')

  return (
    <div className='px-8 md:px-32 py-24'>
      <div className='text-center text-2xl mb-12 animate-fadeUp'>
        {t('We will post updates about the case as they come in. <3')}
      </div>

      <div className='text-center mb-16'>
        <h2 className='text-4xl font-extrabold mb-6 animate-fadeUp'>
          {t('Latest Updates')}
        </h2>

        <div className='space-y-12'>

          <div className='bg-gray-100 rounded-lg p-8 animate-fadeUp'>
            <h3 className='text-2xl font-semibold mb-4'>
              {t('Update 3: Social Media Coverage Increases')}
            </h3>
            <p className='mb-4'>
              {t(
                'The search for Mamta Kafle has started to gain significant attention on social media platforms like YouTube. Below are some of the latest videos discussing the ongoing efforts to find her.'
              )}
            </p>
            <ul className='list-disc list-inside text-left text-blue-600'>
              <li>
                <a
                  href='https://www.youtube.com/watch?v=JGWbfV50m1k'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {t('YouTube: Search for Mamta Kafle continues')}
                </a>
              </li>
              <li>
                <a
                  href='https://www.youtube.com/watch?v=0nvDzyBhzqY'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {t('YouTube: Community efforts in finding Mamta Kafle')}
                </a>
              </li>
              <li>
                <a
                  href='https://www.youtube.com/watch?v=NQdLdmLLy0w'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {t('YouTube: Updates on Mamta Kafle’s case')}
                </a>
              </li>
              <li>
                <a
                  href='https://www.youtube.com/watch?v=ImkClDLO4QQ'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {t('YouTube: Latest news on the search for Mamta Kafle')}
                </a>
              </li>
              <li>
                <a
                  href='https://www.youtube.com/watch?v=ELah00-ngaI'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {t('YouTube: Mamta Kafle case updates')}
                </a>
              </li>
            </ul>
          </div>

          <div className='bg-gray-100 rounded-lg p-8 animate-fadeUp'>
            <h3 className='text-2xl font-semibold mb-4'>
              {t('Update 2: Media Coverage Increases')}
            </h3>
            <p className='mb-4'>
              {t(
                'The Mamta Kafle case has caught significant media attention. Multiple news outlets are covering the ongoing efforts to find her.'
              )}
            </p>
            <ul className='list-disc list-inside text-left text-blue-600'>
              <li>
                <a
                  href='https://www.washingtonpost.com/dc-md-va/2024/08/17/mamta-bhatt-missing-mother-manassas-park/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {t('Washington Post: Missing mother Mamta Kafle from Manassas Park')}
                </a>
              </li>
              <li>
                <a
                  href='https://www.fox5dc.com/news/search-mamta-kafle-community-continues-comb-manassas-park-find-missing-mom.amp'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {t('FOX 5 DC: Community continues to search for missing mom Mamta Kafle')}
                </a>
              </li>
              <li>
                <a
                  href='https://www.wusa9.com/article/news/local/virginia/efforts-find-missing-woman-mamta-kafle-bhatt-continue/65-b56b83a0-23d6-498f-b316-14e828503319'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {t('WUSA 9: Efforts continue to find missing woman Mamta Kafle Bhatt')}
                </a>
              </li>
              <li>
                <a
                  href='https://www.usatoday.com/story/news/nation/2024/08/15/mamta-kafle-missing-manassas-virginia/74808455007/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {t('USA Today: Mamta Kafle missing from Manassas, Virginia')}
                </a>
              </li>
            </ul>
          </div>

          <div className='bg-gray-100 rounded-lg p-8 animate-fadeUp'>
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
    </div>
  )
}

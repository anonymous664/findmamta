import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('')
  return (
    <div className='px-32 py-24 text-center text-2xl'>
      {t(
        'This is a simple page dedicated to raise awareness about Mamta Kafles sudden dissaperance. Help raise your voice together and find her.  Show your support by sharing #findmamtakafle. If no one will do anything - WE WILL!'
      )}
    </div>
  )
}

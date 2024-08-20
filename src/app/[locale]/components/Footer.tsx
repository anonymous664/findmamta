import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <div className='flex items-center justify-center py-4 bg-gray-100'>
      <a
        href='https://www.instagram.com/findmamtakafle/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-pink-500 hover:text-pink-700 transition duration-300 ease-in-out'
      >
        <InstagramIcon fontSize='large' />
      </a>
      <p className='text-gray-600 ml-4'>
        Made with <span className='text-red-500'>❤️</span>
      </p>
    </div>
  );
};

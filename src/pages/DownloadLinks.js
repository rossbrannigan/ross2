import Link from 'next/link';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';

const DownloadLinks = () => (
  <div className="flex justify-center mt-8">
    <Link href="/Ross_CV.pdf" passHref>
      <div className="text-red-500 hover:text-gray-700 mr-4 flex items-center cursor-pointer">
        <FaFilePdf className="mr-2" />
        Download PDF
      </div>
    </Link>

    <Link href="/Ross_CV.docx" passHref>
      <div className="text-blue-500 hover:text-gray-700 flex items-center cursor-pointer">
        <FaFileWord className="mr-2" />
        Download Word
      </div>
    </Link>
  </div>
);

export default DownloadLinks;

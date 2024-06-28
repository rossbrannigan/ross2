import Link from 'next/link';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';

const DownloadLinks = () => (
  <div className="flex justify-center mt-8">
    <Link href="/Ross_CV.pdf" passHref legacyBehavior>
      <a className="text-red-500 hover:text-gray-700 mr-4 flex items-center">
        <FaFilePdf className="mr-2" />
        Download PDF
      </a>
    </Link>

    <Link href="/Ross_CV.docx" passHref legacyBehavior>
      <a className="text-blue-500 hover:text-gray-700 flex items-center">
        <FaFileWord className="mr-2" />
        Download Word
      </a>
    </Link>
  </div>
);

export default DownloadLinks;

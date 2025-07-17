import { useRef, useEffect } from "react";

const ResumeModal = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 pt-20">
      <div
        ref={modalRef}
        className="bg-gray-100 dark:bg-black text-black dark:text-white rounded-xl shadow-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto border dark:border-gray-700"
      >
        {/* Header with Action Buttons */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">My Resume</h2>
          <div className="flex space-x-4">
            <a
              href="/Aaron Vincent Escondo - Resume.pdf"
              download
              className="text-[#4ca771] hover:text-[#013237] px-4 py-2 transition"
            >
              Download
            </a>
            <button
              onClick={onClose}
              className="text-red-500 hover:text-red-800"
            >
              Close
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <iframe
          src="/Aaron Vincent Escondo - Resume.pdf"
          title="Resume"
          className="w-full h-[70vh] border rounded"
          onError={() => {
            window.open("/Aaron Vincent Escondo - Resume.pdf", "_blank");
            onClose(); // close the modal if fallback triggers
          }}
        ></iframe>

      </div>
    </div>
  );
};

export default ResumeModal;

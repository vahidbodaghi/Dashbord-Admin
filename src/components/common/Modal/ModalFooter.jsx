export default function ModalFooter({ onSubmit, onCancel }) {
  return (
    <div className="flex justify-between items-center mx-2 w-full *:rounded-lg *:py-1 *:px-2 *:cursor-pointer">
      <button
        className="bg-red-400/60 text-red-600"
        onClick={onCancel}
        type="button"
      >
        انصراف
      </button>

      <button
        className="bg-green-400/60 text-green-600"
        onClick={onSubmit}
        type="button"
      >
        تایید
      </button>
    </div>
  );
}

import { useGlobalContext } from '../context'
import FormError from './FormError'

function FormDialog () {
  const { modalRef, setIsModalOpen } = useGlobalContext()
  return (
    <dialog ref={modalRef}>
      <FormError error='Some form fields are blank. Please go through the form and fill in missing information'></FormError>
      <button
        type='button'
        className='button'
        button-type='primary'
        aria-label='Close the dialog'
        onClick={() => setIsModalOpen(false)}
      >
        Close
      </button>
    </dialog>
  )
}
export default FormDialog

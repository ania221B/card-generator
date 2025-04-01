import { useGlobalContext } from '../context'
import { memo } from 'react'
import Button from './Button'
import FormError from './FormError'

function FormDialog () {
  const { modalState, modalRef, closeDialog, formErrors } = useGlobalContext()
  const formHasErrors = Object.values(formErrors).some(value => value !== '')

  return (
    <dialog ref={modalRef} data-state={modalState}>
      <div className='dialog__content'>
        {formHasErrors && (
          <FormError error='Some form fields are blank. Please go through the form and fill in missing information'></FormError>
        )}
        <Button
          type='button'
          buttonStyle='primary'
          label='Close the dialog'
          content='Close'
          onClick={closeDialog}
        ></Button>
      </div>
    </dialog>
  )
}
export default memo(FormDialog)

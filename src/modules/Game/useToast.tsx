import { useMemo, useRef, useState } from 'react'
import { Transition, TransitionStatus } from 'react-transition-group'
import styled, { css } from 'styled-components'

type ToastType = 'error' | 'success'

type Props = {
  message: string
  type?: ToastType
}

export const useToast = () => {
  const [displayToast, setDisplayToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [type, setType] = useState<ToastType>('error')
  const timeoutRef = useRef<NodeJS.Timeout>()
  const errorRef = useRef<HTMLParagraphElement>(null)

  const setToast = ({ message, type = 'error' }: Props) => {
    setDisplayToast(true)
    setToastMessage(message)
    setType(type)

    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setDisplayToast(false)
    }, 3000)
  }

  const Toast = useMemo(
    () => (
      <Transition nodeRef={errorRef} in={displayToast} timeout={300}>
        {(state) => {
          return (
            <ErrorMessage ref={errorRef} state={state} $type={type}>
              {toastMessage}
            </ErrorMessage>
          )
        }}
      </Transition>
    ),
    [displayToast, toastMessage, type]
  )

  return {
    setToast,
    Toast,
  }
}

const ErrorMessage = styled.p<{ state: TransitionStatus; $type: ToastType }>`
  ${({ theme, state, $type }) => css`
    display: inline-block;
    color: ${theme[$type]};
    min-height: 1.6em;
    transition: opacity 300ms ease-in-out;
    font-size: 0.8rem;
    opacity: 0;

    ${(state === 'entering' || state === 'entered') &&
    css`
      opacity: 1;
    `}
    ${(state === 'exiting' || state === 'exited') &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
  `}
`

import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { FaCheckIcon, FaCopyIcon } from 'smarthr-ui'
import { CSS_COLOR } from '@Constants/style'

type CopyButtonProps = {
  text: string
}

export const CopyButton: FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = useState(false)
  return (
    <StyledButton
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        })
      }}
      title={`${text}をクリップボードにコピーする`}
      disabled={copied}
    >
      {copied ? <FaCheckIcon size={20} /> : <FaCopyIcon size={20} />}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  appearance: none;
  margin: 0;
  padding: 0;
  border: 0;
  color: ${CSS_COLOR.TEXT_GREY};
  background: transparent;
  cursor: pointer;
`

import * as React from 'react'
import { useContext } from 'react'
import clsx from 'clsx'
import VisuallyHidden from '~/components/VisuallyHidden'
import Code from '~/components/Code'
import { Label, Description, Item, CodeWrapper } from './style'
import { QuizVariantData } from './types'
import QuizContext from '../../context/quiz'

type Props = {
  question: string
  completed: boolean
  variant: QuizVariantData
}

function QuizVariant(props: Props) {
  const { question, completed, variant } = props
  const { main, code, description, id } = variant

  const context = useContext(QuizContext)
  const { selected, correct } = context[id]

  return (
    <Item>
      <Label className={clsx({ selected }, { correct }, { completed })}>
        <VisuallyHidden>
          <input type="checkbox" name={question} value={main} defaultChecked={selected} disabled={completed} />
        </VisuallyHidden>

        <div>{main}</div>
        {!!code && (
          <CodeWrapper>
            <Code>{code}</Code>
          </CodeWrapper>
        )}
      </Label>
      {!!description && completed && <Description>{description}</Description>}
    </Item>
  )
}

export default QuizVariant

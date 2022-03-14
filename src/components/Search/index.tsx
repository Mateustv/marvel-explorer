import * as S from './styles'
import { FormEvent, useCallback, useRef } from 'react';

export type SearchProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  onSubmit?: (inputValue: string) => void;
}

const Search = ({
  label = 'Type the name of your hero',
  placeholder = 'Ex: iron main',
  error = '',
  onSubmit,
}: SearchProps) => {

  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    const inputValue = inputRef.current?.value || ''

    !!onSubmit && onSubmit(inputValue)
  }, [onSubmit])

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Label htmlFor='search'>
        {label}
      </S.Label>

      <S.InputWrapper>
        <S.Input id='search' ref={inputRef} placeholder={placeholder} />
        <S.Button type='submit'>Search</S.Button>
      </S.InputWrapper>

      {!!error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}

export default Search
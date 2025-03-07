import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { navigate } from 'gatsby'
import { Hits, connectSearchBox } from 'react-instantsearch-dom'
import type { SearchBoxProvided } from 'react-instantsearch-core'
import styled from 'styled-components'
import { FaSearchIcon, Input } from 'smarthr-ui'
import { HitComponent } from './HitComponent'
import { SearchResultOuter } from './SearchResultOuter'
import { CSS_FONT_SIZE } from '@Constants/style'
import { useLocation } from '@reach/router'

const SearchBox: FC<SearchBoxProvided> = ({ refine }) => {
  const [searchState, setSearchState] = useState<string | undefined>()

  // クエリ付きURLでアクセスされた場合
  const location = useLocation()
  useEffect(() => {
    const { search } = location
    const params = new URLSearchParams(search)
    const query = params.get('query')

    if (query && searchState === undefined) setSearchState(query)
  }, [location, searchState])

  // テキスト入力による検索
  const onSearchStateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchQuery = event.target.value

    navigate(`?query=${encodeURI(searchQuery)}`)
    setSearchState(searchQuery)
  }

  useEffect(() => {
    refine(searchState)
  }, [searchState, refine])

  return (
    <>
      {/* 検索インプット部分 */}
      <InputOuter>
        <p id="desc-for-search-input">例：Button、画面キャプチャ、用字用語、須磨英知など</p>

        <Input
          width="100%"
          prefix={<FaSearchIcon size={24} aria-label="検索" />}
          value={searchState}
          onChange={onSearchStateChange}
          autoFocus // eslint-disable-line jsx-a11y/no-autofocus
          aria-labelledby="label-for-search-input"
          aria-describedby="desc-for-search-input"
        />
      </InputOuter>

      {/* 検索結果 */}
      <SearchResultOuter>
        <Hits hitComponent={HitComponent} />
      </SearchResultOuter>
    </>
  )
}
export const CustomSearchBox = connectSearchBox(SearchBox)

const InputOuter = styled.div`
  width: 100%;
  max-width: 712px;
  margin-inline: auto;
  & p {
    margin: 0 0 8px;
    text-align: center;
    font-size: ${CSS_FONT_SIZE.PX_13};
  }
  .smarthr-ui-Input {
    padding-inline: 24px;
    border-radius: 12px;
  }
  .smarthr-ui-Input-input {
    box-sizing: border-box;
    width: 100%;
    height: 78px;
    padding-block: 0;
    padding-inline: 24px 24px;
    border-radius: 12px;
    font-size: 1.5rem;
  }
`

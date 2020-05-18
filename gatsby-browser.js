import React from "react"
import { ContextProvider, PlayerConsumer } from "./src/store/provider"
import Header from "./src/components/header"

export const wrapPageElement = ({ element, props }) => {
  return (
    <ContextProvider>
      <PlayerConsumer></PlayerConsumer>
      <Header />
      {element}
    </ContextProvider>
  )
}

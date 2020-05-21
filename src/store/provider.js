import React from "react"
import providerStyles from "./providerStyles.module.scss"

export const PlayerContext = React.createContext()

export const ContextProvider = props => {
  const [playlist, setPlaylist] = React.useState(null)
  const [show, setShow] = React.useState(false)

  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
  }

  const getRandomStyles = () => {
    return {
      left: getRandomInt(0, window.innerWidth - 350),
      top: getRandomInt(0, window.innerHeight - 200),
    }
  }

  // const left = getRandomInt(0, window.innerWidth - 350)
  // const top = getRandomInt(0, window.innerHeight - 200)

  const [styles, setStyles] = React.useState({
    top: `${getRandomStyles().top}px`,
    left: `${getRandomStyles().left}px`,
  })

  return (
    <PlayerContext.Provider
      value={{
        playlist,
        show,
        styles,
        changePlayer: newPlaylist => {
          setPlaylist(newPlaylist)
          setStyles({
            top: `${getRandomStyles().top}px`,
            left: `${getRandomStyles().left}px`,
          })
        },
        showPlayer: () => setShow(true),
        hidePlayer: () => setShow(false),
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  )
}

export const PlayerConsumer = props => {
  let { show } = React.useContext(PlayerContext)

  if (show) {
    return (
      <PlayerContext.Consumer>
        {context => (
          <div
            className={
              context.show ? providerStyles.player : providerStyles.playerHide
            }
            style={context.styles}
            draggable="true"
          >
            <p>
              <button
                className={providerStyles.closeIcon}
                onClick={() => {
                  context.hidePlayer()
                }}
              >
                ×
              </button>
            </p>
            <p>{context.playlist.mixName}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: context.playlist.mixUrl,
              }}
            />
          </div>
        )}
      </PlayerContext.Consumer>
    )
  } else return null
}

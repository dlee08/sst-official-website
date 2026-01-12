"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  words: string[]
  speed?: number
  delayBetweenWords?: number
  cursor?: boolean
  cursorChar?: string
  onComplete?: () => void
}

export function Typewriter({
  words,
  speed = 100,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = "|",
  onComplete,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  const currentWord = words[wordIndex]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Typing logic
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            // Word is complete
            if (wordIndex === words.length - 1 && !isComplete) {
              // Last word complete - notify parent
              setIsComplete(true)
              if (onComplete) {
                onComplete()
              }
            } else if (wordIndex < words.length - 1) {
              // Not last word, wait before deleting
              setTimeout(() => {
                setIsDeleting(true)
              }, delayBetweenWords)
            }
          }
        } else {
          // Deleting logic
          if (charIndex > 0) {
            setDisplayText(currentWord.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            // Word is deleted, move to next word
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, currentWord, isDeleting, speed, delayBetweenWords, wordIndex, words, isComplete, onComplete])

  // Cursor blinking effect
  useEffect(() => {
    if (!cursor) return

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [cursor])

  return (
    <div className="inline-block">
      <span>
        {displayText}
        {cursor && !isComplete && (
          <span className="ml-1 transition-opacity duration-75" style={{ opacity: showCursor ? 1 : 0 }}>
            {cursorChar}
          </span>
        )}
      </span>
    </div>
  )
}

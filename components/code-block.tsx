"use client"

import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'next-themes'

export const CodeBlock = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { theme } = useTheme()
  const language = className ? className.replace(/language-/, '') : 'javascript'

  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        backgroundColor: theme === 'dark' ? '#1E1E1E' : '#F8F8F8',
        padding: '1rem',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
      }}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}


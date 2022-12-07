import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string> // obejecto que tem a chave uma string e um valor string
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <th>Name</th>
        <th>Values</th>
        {hasRemValue && <th>Pixels</th>}
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td> // numeros do REM
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

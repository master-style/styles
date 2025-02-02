import syntaxes from '../syntaxes'
import SyntaxTable from 'internal/components/SyntaxTable'
import SyntaxTr from 'internal/components/SyntaxTr'
import SyntaxPreview from './SyntaxPreview'

export default () => {
    const previewSyntax = 'box-decoration:slice'
    return (
        <>
            <SyntaxTable>
                {syntaxes.map((syntax) =>
                    <SyntaxTr value={syntax} key={syntax} previewSyntax={previewSyntax}></SyntaxTr>)
                }
            </SyntaxTable>
            <SyntaxPreview className={previewSyntax} />
        </>
    )
}
import { functions } from '@master/css'
import InlineCode from 'internal/components/InlineCode'

export default () => <table>
    <thead>
        <tr>
            <th className="w:0">Name</th>
            <th className="w:0">Unit</th>
            <th>Native Name</th>
        </tr>
    </thead>
    <tbody>
        {
            Object.keys(functions)
                .map((eachFunctionName) => {
                    // @ts-ignore
                    const eachFunction = functions[eachFunctionName]
                    return (
                        <tr key={eachFunctionName}>
                            <td>
                                <code className="token language-mcss white-space:nowrap">
                                    <span className="token mcss">
                                        <span className="token Mvalueroot">
                                            <span className="token Mvalue">{eachFunctionName}<span className="token Mbracket">(</span>…<span className="token Mbracket">)</span></span>
                                        </span>
                                    </span>
                                </code>
                            </td>
                            <td>
                                {
                                    eachFunction.unit
                                        ? <code className='fg:pink'>{eachFunction.unit}</code>
                                        : <span className='fg:lightest'>-</span>
                                }
                            </td>
                            <td>
                                {
                                    <code>{eachFunctionName}</code>
                                }
                            </td>
                        </tr>
                    )
                })
        }
    </tbody>
</table>
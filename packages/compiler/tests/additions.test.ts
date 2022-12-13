import MasterCSSCompiler from '../src'

test('additions', () => {
    const compiler = new MasterCSSCompiler({
        additions: ['./test.html'],
        cwd: __dirname
    })
    expect(compiler.css.rules.map((eachRule) => eachRule.className).length)
        .toBeNull()
})
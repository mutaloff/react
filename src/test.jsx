import React, { useRef } from "react";

const themes = {
    light: { background: '#eeeeee' },
    dark: { background: 'rgb(60, 60, 70)', color: 'rgb(200, 200, 200)' },
};

const languages = {
    en: { themeButton: 'Change theme', langButton: 'Change language' },
    ru: { themeButton: 'Сменить тему', langButton: 'Сменить язык' }
}


const ThemeContext = React.createContext(themes.dark);
const LangContext = React.createContext('en')

function ChangeLanguageButton() {
    return (
        <LangContext.Consumer>
            {({ language, toggleLanguage, theme }) => (
                <button
                    onClick={toggleLanguage}
                    style={{
                        backgroundColor: theme.background,
                        width: '100px',
                        borderRadius: '4px',
                        color: theme.color
                    }}>
                    {language.langButton}
                </button>
            )}
        </LangContext.Consumer>
    )
}

class ThemedButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme, toggleTheme, language }) => (
                    <button
                        onClick={toggleTheme}
                        style={{
                            backgroundColor: theme.background,
                            borderRadius: '4px',
                            width: '100px',
                            color: theme.color
                        }}>
                        {language.themeButton}
                    </button>
                )}
            </ThemeContext.Consumer>
        );
    }
}
function LevelUp() {
    return (
        <div>
            <ThemedButton />
            <ChangeLanguageButton />
        </div>
    )
}

class MyContextTest extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark
            }));
        };
        this.toggleLanguage = () => {
            this.setState(state => ({
                lang:
                    state.lang === languages.en
                        ? languages.ru
                        : languages.en
            }));
        }
        this.state = {
            theme: themes.light,
            lang: languages['en']
        };
    }
    render() {
        return (
            <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme, language: this.state.lang }}>
                <LangContext.Provider value={{ language: this.state.lang, toggleLanguage: this.toggleLanguage, theme: this.state.theme }}>
                    <LevelUp />
                </LangContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

class MyErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null, hasError: false };
    }


    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    {this.props.children}
                    {this.state.hasError && <h3>Вы напечатали "hello"</h3>}
                </div>
            )
        }
        return this.props.children;
    }
}

class MyError extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '', error: null, errorInfo: null }
        this.checkError = this.checkError.bind(this)
    }
    checkError(e) {
        this.setState({ text: e.target.value })
    }
    render() {
        if (this.state.text === 'hello') {
            throw new Error('I need hello world!');
        }
        return (
            <input
                style={{ marginLeft: '20px' }}
                type='text'
                onChange={this.checkError}
                value={this.state.text}>
            </input>
        )
    }
}

const MyInput = React.forwardRef((props, ref) => {
    return <input ref={ref} style={{ marginLeft: '20px' }} />
})

function MyRef(props) {
    let inputRef = useRef(null)
    let clearTextInput = () => {
        inputRef.current.focus()
        inputRef.current.value = ''
    }
    return (
        <>
            <MyInput ref={inputRef} />
            <button
                onClick={clearTextInput}>
                x
            </button>
        </>
    )
}


class Destruction extends React.Component {
    render() {
        return (
            <>
            </>
        )
    }
}

export default class Test extends React.Component {
    render() {
        return (
            <>
                <MyContextTest />
                <hr />
                <MyErrorBoundary>
                    <MyError />
                </MyErrorBoundary>
                <hr />
                <MyRef />
                <hr />
                <Destruction />
            </>
        )
    }
}

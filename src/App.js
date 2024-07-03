/**
 * Minefields
 *
 */

import React, { Component } from "react"
import { StyleSheet, View, Alert } from 'react-native'
import settings from './settings'
import Header from './components/Header'
import LevelSelection from './screens/LevelSelection'
import Minefield from './components/Minefield'
import { 
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagUsed
} from './functions'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = this.createState()
    }

    minesAmount = () => {
        const cols = settings.getColumnsAmount()
        const rows = settings.getRowsAmount()
        return Math.ceil(cols * rows * settings.difficultLevel)
    }

    createState = () => {
        const cols = settings.getColumnsAmount()
        const rows = settings.getRowsAmount()
        return {
            board: createMinedBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false,
            showLevelSelection: false
        }
    }

    onOpenField = (row, column) => {
        const board = cloneBoard(this.state.board)
        if (!hadExplosion(board) && !wonGame(board)) openField(board, row, column)
        const lost = hadExplosion(board)
        const won = wonGame(board)

        if (lost) {
            showMines(board)
            Alert.alert('Derrota!', 'Você perdeu. Tente novamente clicando em "Novo Jogo".')
        }

        if (won) {
            Alert.alert('Vitória!', 'Parabéns! Você encontrou todas as minas!')
        }

        this.setState({ board, lost, won })
    }

    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board)
        invertFlag(board, row, column)
        const won = wonGame(board)

        if (won) {
            Alert.alert('Parabéns!', 'Você venceu')
        }

        this.setState({ board, won })
    }

    onLevelSelected = level => {
        settings.difficultLevel = level
        this.setState(this.createState())
    }

    render() {
        return (
            <View style={styles.container}>
                <LevelSelection isVisible={this.state.showLevelSelection} onLevelSelect={this.onLevelSelected} onCancel={() => this.setState({ showLevelSelection: false })} />
                <Header flagsLeft={this.minesAmount() - flagUsed(this.state.board)} onNewGame={() => this.setState(this.createState())} onFlagPress={() => this.setState({ showLevelSelection: true })} />
                <View style={styles.board}>
                    <Minefield board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField} />
                </View>
            </View>   
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    board: {
        alignItems: 'center',
        backgroundColor: '#777'
    }
})

import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]} />
            <View style={[styles.flag1, props.bigger ? styles.flag1Bigger : null]} />
            <View style={[styles.flag2, props.bigger ? styles.flag2Bigger : null]} />
            <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]} />
            <View style={[styles.base2, props.bigger ? styles.base2Bigger : null]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 1
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9
    },
    flag1: {
        position: 'absolute',
        height: 2.5,
        width: 6,
        backgroundColor: '#1A5DAB',
        marginLeft: 3
    },
    flag2: {
        position: 'absolute',
        height: 2.5,
        width: 6,
        backgroundColor: '#F7CE00',
        marginLeft: 3,
        marginTop: 2.5
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12
    },
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16
    },
    flag1Bigger: {
        height: 5,
        width: 13,
        marginLeft: 3
    },
    flag2Bigger: {
        height: 5,
        width: 13,
        marginLeft: 3,
        marginTop: 5
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginLeft: 12,
        marginTop: 20
    },
    base2Bigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24
    }
})
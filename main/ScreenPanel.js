import React from 'react';
import { Text, View } from 'react-native';


export class ScreenPanel extends React.Component {
    render() {
        return (
            <View style={{ flex: 5 }}>
                <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'blue' }}>
                    <Text style={{ marginBottom: 5, fontSize: 20, marginRight: 5. }}>{this.props.preresult}</Text>
                </View>
                <View style={{ flex: 3, justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'lightblue' }}>
                    <Text style={{ marginBottom: 5, fontSize: 40, marginRight: 5. }}>{this.props.result}{this.props.oper}</Text>
                </View>
            </View>
        )
    }
}

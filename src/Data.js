import React, { Component } from 'react';
import Chart from 'react-google-charts';
import result from './assets/result.json';
import styled from "styled-components";



const BarChart = styled.div`
float:right
`;


class Data extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        bikeData: result
    }

    typeTime() {
        const { bikeData } = this.state;
        let MonthlyDuration = 0;
        let FlexDuration = 0;
        let WalkDuration = 0;
        for (let i = 0; i < bikeData.length; i++) {
            if (bikeData[i]['Passholder Type'] === 'Monthly Pass') {
                MonthlyDuration += parseInt(bikeData[i].Duration);
            }
            if (bikeData[i]['Passholder Type'] === 'Flex Pass') {
                FlexDuration += parseInt(bikeData[i].Duration);
            }
            if (bikeData[i]['Passholder Type'] === 'Walk-up') {
                WalkDuration += parseInt(bikeData[i].Duration);
            }
        }
        MonthlyDuration = MonthlyDuration / 3600;
        FlexDuration = FlexDuration / 3600;
        WalkDuration = WalkDuration / 3600;
        let Total = (MonthlyDuration + FlexDuration + WalkDuration);
        let all = [
            ['Passholder Type', 'Time'],
            ['Monthly', MonthlyDuration],
            ['Flex', FlexDuration],
            ['Walk-In', WalkDuration],
            ['Total', Total]
        ]
        return all;
    }
    idDistance() {
        const { bikeData } = this.state;
        let myMap = new Map();
        for (let i = 0; i < bikeData.length; i++) {
            myMap.set(bikeData[i]["Bike ID"], parseInt(bikeData[i].Duration) / 3600);
        }
        let all = [['a', 'Duration (Hours)']];
        var convert = myMap[Symbol.iterator]();

        for (let item of convert) {
            all.push(item);
        }
        return all;

    }
    bikeMonth() {
        const { bikeData } = this.state;
        let myMap = new Map();
        for (let i = 0; i < bikeData.length; i++) {
            myMap.set(bikeData[i]["Bike ID"], parseInt(bikeData[i].Duration) / 3600);
        }
        let all = [['a', 'Duration (Hours)']];
        var convert = myMap[Symbol.iterator]();

        for (let item of convert) {
            all.push(item);
        }
        return all;

    }
    render() {

        return (
            < React.Fragment >
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={this.typeTime()}
                    options={{
                        // Material design options
                        chart: {
                            title: 'Passholder Type vs Time Duration',
                            subtitle: 'How long each Passholder Type uses the bikes',
                        },
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
                <Chart
                    width={'1000px'}
                    height={'300px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={this.idDistance()}
                    options={{
                        hAxis: {
                            title: 'Hours spent on bike',
                        },
                        vAxis: {
                            title: 'Bike ID',
                        },
                        title: 'Hours Spent on Bike'
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
                <Chart
                    width={'1000px'}
                    height={'300px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={this.idDistance()}
                    options={{
                        hAxis: {
                            title: 'Hours spent on bike',
                        },
                        vAxis: {
                            title: 'Bike ID',
                        },
                        title: 'Hours Spent on Bike'
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
            </React.Fragment>
        );
    }
}

export default Data;
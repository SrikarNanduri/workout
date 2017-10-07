import React from 'react';
import { Scene,Router } from 'react-native-router-flux';
import { Abs, Biceps, Chest, Home, Lats, Legs, Shoulder, Triceps } from './components/screens';
import { latPulldown, seatedCablerow, Tbar, bentOver, Dumbbellrows,  closeGrippd } from './components/screens/lats';
import { crossBody, Crunches, legRise, mountainClimbers, Planks, reverseCrunches, sittingTwists } from './components/screens/abs';
import { barbellCurls, cableCurls, chinUps, concentrationCurls, dumbbellHammers, dumbbellCurls, preacherCurls } from './components/screens/biceps';
import { chestDips, chestExt, declinePress, flatBench, flatFly, inclineDumbbell, inclineFly, landmine, pullUps, pushUps } from './components/screens/chest';
import { calfRaises, calvesLeg, dumbbellWalkinglunge, gobletSquat, legExt, Squats } from './components/screens/legs';
import { arnoldPress, dumbbellLateral, dumbbellPress, dumbbellRaise, militaryPress, shoulderMachine, upRightrow } from './components/screens/shoulder';
import { cableExt, closeGrip, diamond, dips, Ezbar, oneArm, tricepExt } from './components/screens/triceps';

const RouterComponent = () => {
return(
  <Router sceneStyle={{ paddingTop:50 }} barButtonIconStyle={{ tintColor: '#F8F8F8',   }} navigationBarStyle={{ backgroundColor: '#000', height: 65 }} titleStyle={{color: '#F8F8F8', fontSize: 20, fontFamily:'OCR A'}}>
    <Scene key="root">

    <Scene key="Home"  component={ Home } title="WORKOUT" initial />
    <Scene key="Chest" component={ Chest } title="CHEST" />
    <Scene key="Lats" component={ Lats } title="LATS" />
    <Scene key="Biceps" component={ Biceps } title="BICEPS" />
    <Scene key="Shoulder" component={ Shoulder } title="SHOULDER" />
    <Scene key="Triceps" component={ Triceps } title="TRICEPS" />
    <Scene key="Legs" component={ Legs } title="LEGS" />
    <Scene key="Abs" component={ Abs } title="ABS" />

    <Scene key="latPulldown" component={ latPulldown } title="LAT PULL DOWN'S" />
    <Scene key="seatedCablerow" component={ seatedCablerow } title="SEATED CABLE ROW" />
    <Scene key="closeGrippd" component={ closeGrippd } title="CLOSE GRIP LAT PULL DOWN'S" />
    <Scene key="bentOver" component={ bentOver } title="BENT OVER BARBELL ROW" />
    <Scene key="Tbar" component={ Tbar } title="T-BAR ROW" />
    <Scene key="Dumbbellrows" component={ Dumbbellrows } title="DUMBBELL ROWS" />

    <Scene key="crossBody" component={ crossBody } title="CROSS BODY CRUNCHES" />
    <Scene key="Crunches" component={ Crunches } title="CRUNCHES" />
    <Scene key="legRise" component={ legRise } title="LEG RAISE" />
    <Scene key="mountainClimbers" component={ mountainClimbers } title="MOUNTAIN CLIMBERS" />
    <Scene key="Planks" component={ Planks } title="PLANKS" />
    <Scene key="reverseCrunches" component={ reverseCrunches } title="REVERSE CRUNCHES" />
    <Scene key="sittingTwists" component={ sittingTwists } title="SITTING TWISTS" />

    <Scene key="barbellCurls" component={ barbellCurls } title="BARBELL CURLS" />
    <Scene key="cableCurls" component={ cableCurls } title="CABLE CURLS" />
    <Scene key="chinUps" component={ chinUps } title="CHIN UPS" />
    <Scene key="dumbbellCurls" component={ dumbbellCurls } title="DUMBBELL CURLS" />
    <Scene key="dumbbellHammers" component={ dumbbellHammers } title="DUMBBELL HAMMERS" />
    <Scene key="preacherCurls" component={ preacherCurls } title="PREACHER CURLS" />
    <Scene key="concentrationCurls" component={ concentrationCurls } title="CONCENTRATION CRULS" />

    <Scene key="chestDips" component={ chestDips } title="CHEST DIPS" />
    <Scene key="chestExt" component={ chestExt } title="CHEST EXTENSIONS" />
    <Scene key="declinePress" component={ declinePress } title="DECLINE DUMBBELL PRESS" />
    <Scene key="flatBench" component={ flatBench } title="FLAT BENCH PRESS" />
    <Scene key="flatFly" component={ flatFly } title="FLAT BENCH DUMBBELL FLY" />
    <Scene key="inclineDumbbell" component={ inclineDumbbell } title="INCLINE DUMBBELL PRESS" />
    <Scene key="inclineFly" component={ inclineFly } title="INCLINE DUMBBELL FLY" />
    <Scene key="landmine" component={ landmine } title="LANDMINE PRESS" />
    <Scene key="pullUps" component={ pullUps } title="PULL UPS" />
    <Scene key="pushUps" component={ pushUps } title="PUSH UPS" />

    <Scene key="calfRaises" component={ calfRaises } title="CALF RAISES" />
    <Scene key="calvesLeg" component={ calvesLeg } title="CALVES LEG PRESS" />
    <Scene key="dumbbellWalkinglunge" component={ dumbbellWalkinglunge } title="DUMBBELL WALKING LUNGES" />
    <Scene key="gobletSquat" component={ gobletSquat } title="GOBLET SQUATS" />
    <Scene key="legExt" component={ legExt } title="LEG EXTENSIONS" />
    <Scene key="Squats" component={ Squats } title="SQUATS" />

    <Scene key="arnoldPress" component={ arnoldPress } title="ARNOLD PRESS" />
    <Scene key="dumbbellLateral" component={ dumbbellLateral } title="DUMBBELL LATERAL RAISE" />
    <Scene key="dumbbellPress" component={ dumbbellPress } title="DUMBBELL PRESS" />
    <Scene key="dumbbellRaise" component={ dumbbellRaise } title="DUMBBELL FRONT RAISES" />
    <Scene key="militaryPress" component={ militaryPress } title="MILITARY PRESS" />
    <Scene key="shoulderMachine" component={ shoulderMachine } title="SHOULDER MACHINE" />
    <Scene key="upRightrow" component={ upRightrow } title="UP RIGHT ROW" />

    <Scene key="cableExt" component={ cableExt } title="CABLE EXTENSIONS" />
    <Scene key="closeGrip" component={ closeGrip } title="CLOSE GRIP BENCH PRESS" />
    <Scene key="diamond" component={ diamond } title="DIAMOND PUSH UP" />
    <Scene key="dips" component={ dips } title="DIPS" />
    <Scene key="Ezbar" component={ Ezbar } title="EZ-BAR SKULL CRUSHER" />
    <Scene key="oneArm" component={ oneArm } title="ONE ARM TRICEP EXTENSION" />
    <Scene key="tricepExt" component={ tricepExt } title="TRICEP EXTENSION" />

  </Scene>
  </Router>
);
};



export default RouterComponent;

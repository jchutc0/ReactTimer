var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

    it('should start timer on started status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      expect(timer.state.count).toBe(0);

      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('started');
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('paused');
        expect(timer.state.count).toBe(10);
        done();
      }, 1001);
    });

    it('should clear count on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');
      expect(timer.state.count).toBe(0);

      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('stopped');
        expect(timer.state.count).toBe(0);
        done();
      }, 1001);
    });



  // describe('handleSetCountdown', () => {
  //   it('should set state to started and count down', (done) => {
  //     var countdown = TestUtils.renderIntoDocument(<Countdown/>);
  //     countdown.handleSetCountdown(10);
  //
  //     expect(countdown.state.count).toBe(10);
  //     expect(countdown.state.countdownStatus).toBe('started');
  //
  //     setTimeout(() => {
  //       expect(countdown.state.count).toBe(9);
  //       done();
  //     }, 1001);
  //   });
  //
  //   it('should stop counting down at 0', (done) => {
  //     var countdown = TestUtils.renderIntoDocument(<Countdown/>);
  //     countdown.handleSetCountdown(1);
  //
  //     setTimeout(() => {
  //       expect(countdown.state.count).toBe(0);
  //       done();
  //     }, 3001);
  //   });
  //
  //   it('should pause countdown on paused status', (done) => {
  //     var countdown = TestUtils.renderIntoDocument(<Countdown/>);
  //     countdown.handleSetCountdown(3);
  //     countdown.handleStatusChange('paused');
  //
  //     setTimeout(() => {
  //       expect(countdown.state.count).toBe(3);
  //       expect(countdown.state.countdownStatus).toBe('paused');
  //       done();
  //     }, 1001);
  //   });
  //
  //   it('should remain stopped on stopped status', (done) => {
  //     var countdown = TestUtils.renderIntoDocument(<Countdown/>);
  //     countdown.handleSetCountdown(3);
  //     countdown.handleStatusChange('stopped');
  //
  //     setTimeout(() => {
  //       expect(countdown.state.count).toBe(0);
  //       expect(countdown.state.countdownStatus).toBe('stopped');
  //       done();
  //     }, 1001);
  //   });
  // });
});

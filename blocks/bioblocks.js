// @author Jorge Díez García-Victoria

'use strict';

goog.provide('Blockly.Constants.Bioblocks');

goog.require('Blockly.Blocks');
goog.require('Blockly.constants');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
// Block for constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
{
    "type": "pin_dropdown",
    "message0": "Pin %1",
    "args0": [ //random comment to check 
      {
        "type": "field_dropdown",
        "name": "PIN",
        "options": [
          ["D0","0"],
          ["D1","1"],
          ["D2","2"],
          ["D3","3"],
          ["D4","4"],
          ["D5","5"],
          ["D6","6"],
          ["D7","7"],
          ["D8","8"],
          ["D9","9"],
          ["D10","10"],
          ["D11","11"],
          ["D12","12"],
          ["D13","13"],
          ["D14","14"],
          ["D15","15"],
          ["D16","16"],
          ["D17","17"],
          ["D18","18"],
          ["D19","19"],
          ["D20","20"],
          ["D21","21"],
          ["D22","22"],
          ["D23","23"],
          ["D24","24"],
          ["D25","25"],
          ["D26","26"],
          ["D27","27"],
          ["D28","28"],
          ["D29","29"],
          ["D30","30"],
          ["D31","31"],
          ["D32","32"],
          ["D33","33"],
          ["D34","34"],
          ["D35","35"],
          ["D36","36"],
          ["D37","37"],
          ["D38","38"],
          ["D39","39"],
          ["D40","40"],
          ["D41","41"],
          ["D42","42"],
          ["D43","43"],
          ["D44","44"],
          ["D45","45"],
          ["D46","46"],
          ["D47","47"],
          ["D48","48"],
          ["D49","49"],
          ["D50","50"],
          ["D51","51"],
          ["D52","52"],
          ["D53","53"],
          ["A0", "A0"],
          ["A1", "A1"],
          ["A2", "A2"],
          ["A3", "A3"],
          ["A4", "A4"],
          ["A5", "A5"],
          ["A6", "A6"],
          ["A7", "A7"],
          ["A8", "A8"],
          ["A9", "A9"],
          ["A10", "A10"],
          ["A11", "A11"],
          ["A12", "A12"],
          ["A13", "A13"],
          ["A14", "A15"]
        ]
      }
    ],
    "output": "Number",
    "colour": "%{BKY_VARIABLES_HUE}",
    "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
    "tooltip": "Generates a pin dropdown",
    "helpUrl": "-"
  },

  {
    "type": "selector",
    "message0": "Digital Write to Pin %1  %2",
    "args0": [ //random comment to check 
      {
        "type": "field_dropdown",
        "name": "PORT",
        "options": [
          ["D0","0"],
          ["D1","1"],
          ["D2","2"],
          ["D3","3"],
          ["D4","4"],
          ["D5","5"],
          ["D6","6"],
          ["D7","7"],
          ["D8","8"],
          ["D9","9"],
          ["D10","10"],
          ["D11","11"],
          ["D12","12"],
          ["D13","13"],
          ["D14","14"],
          ["D15","15"],
          ["D16","16"],
          ["D17","17"],
          ["D18","18"],
          ["D19","19"],
          ["D20","20"],
          ["D21","21"],
          ["D22","22"],
          ["D23","23"],
          ["D24","24"],
          ["D25","25"],
          ["D26","26"],
          ["D27","27"],
          ["D28","28"],
          ["D29","29"],
          ["D30","30"],
          ["D31","31"],
          ["D32","32"],
          ["D33","33"],
          ["D34","34"],
          ["D35","35"],
          ["D36","36"],
          ["D37","37"],
          ["D38","38"],
          ["D39","39"],
          ["D40","40"],
          ["D41","41"],
          ["D42","42"],
          ["D43","43"],
          ["D44","44"],
          ["D45","45"],
          ["D46","46"],
          ["D47","47"],
          ["D48","48"],
          ["D49","49"],
          ["D50","50"],
          ["D51","51"],
          ["D52","52"],
          ["D53","53"],
          ["A0", "A0"],
          ["A1", "A1"],
          ["A2", "A2"],
          ["A3", "A3"],
          ["A4", "A4"],
          ["A5", "A5"],
          ["A6", "A6"],
          ["A7", "A7"],
          ["A8", "A8"],
          ["A9", "A9"],
          ["A10", "A10"],
          ["A11", "A11"],
          ["A12", "A12"],
          ["A13", "A13"],
          ["A14", "A15"]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "MODE",
        "options": [
          ["HIGH","HIGH"],
          ["LOW", "LOW"]
        ]
      }
    ],
    "output": "Number",
    "colour": "%{BKY_VARIABLES_HUE}",
    "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
    "tooltip": "Generates a pin dropdown",
    "helpUrl": "-"
  }


]);  // END JSON EXTRACT (Do not delete this comment.)


Blockly.Blocks['new_centrifuge'] = {
  init: function() {
    this.setInputsInline(false); // Horizontal: No (too many inputs)
    this.setPreviousStatement(true); // Can stick to something before (yes)
    this.setNextStatement(true); // Can have a modifier on the bottom (yes)
    this.setColour(120); // Green

    // Title
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("CENTRIFUGE")
    this.setTooltip('');

    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_LEFT)
      .appendField("Connected to ")
      .appendField(new Blockly.FieldDropdown([
          ["D0", "D0"],
          ["D1", "D1"],
          ["D2", "D2"],
          ["D3", "D3"]
      ]), "D1")
    this.setTooltip('');

    // this.appendValueInput('IF0')
    // .setCheck('Boolean')
    // .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);

    this.appendValueInput("source")
      .setCheck(["containerCheck", "containerList"])
      .setAlign(Blockly.ALIGN_LEFT)
      .appendField("Container input");

    this.appendValueInput("SPEED")
      .setCheck("Number")
      .appendField("Speed");

    this.appendValueInput("RPM")
      .setCheck("Number")
      .appendField("RPM");

    this.appendValueInput("DURATION")
      .setCheck("Number")
      .appendField("Duration")
      .appendField(new Blockly.FieldDropdown([["in minutes", "minutes"], ["in milliseconds", "milliseconds"], ["in seconds", "seconds"], ["in hours", "hours"]]), "DURATION_UNIT");

    this.appendValueInput("OPERATION_TIME")
      .setCheck("Number")
      .appendField("Time of operation");

    this.appendValueInput("TEMPERATURE")
      .setCheck("Number")
      .appendField("Temperature")
      .appendField(new Blockly.FieldDropdown([["in Celsius", "celsius"], ["in Kelvin", "kelvin"]]), "TEMPERATURE_UNIT");

  },
};
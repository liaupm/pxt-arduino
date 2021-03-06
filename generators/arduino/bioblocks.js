/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Arduino for bioblocks blocks.
 * @author Jorge Díez García-Victoria
 */
'use strict';

goog.provide('Blockly.Arduino.bioblocks');
goog.require('Blockly.Arduino');

Blockly.Arduino['pin_dropdown'] = function(block) {
  return ["char pin" + block.getFieldValue('PIN') +  " = " + block.getFieldValue('PIN') + ";"];
};


Blockly.Arduino['selector'] = function(block) {
	return ["digitalWrite(" + block.getFieldValue('PORT') +  ", " + block.getFieldValue('MODE') + ");"];
};

//Code without implementation, since more is needed to be able to generate functioning code
Blockly.Arduino['new_centrifuge'] = function(block) {
  return ["char connection" + block.getFieldValue('Connected to') +  " = " + block.getFieldValue('Connected to "') + ";\n"
              + "float speed = " + block.getFieldValue('SPEED') + ";\n" + 
              + "float RPM = " + block.getFieldValue('RPM') + ";\n"
              + "float duration = " + block.getFieldValue('DURATION') + ";\n"
              + "float operation_time = " + block.getFieldValue('OPERATION_TIME') + ";\n" 
              + "float temperature = " + block.getFieldValue('TEMPERATURE') + ";\n"];
};
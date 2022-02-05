/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @return input < 0? -1. input = 0? 0. input > 0? 1.
 */
export function signum(input) {
    if (input < 0) {
        return -1;
    } else if (input === 0) {
        return 0;
    } else {
        return 1;
    }
}

/**
 * Ensure min <= input <= max
 */
export function clamp(min, max, input) {
    return Math.min(Math.max(input, min), max);
}

/**
 * Linearly interpolate from start to stop, by amount (0.0 <= amount <= 1.0)
 */
export function lerp(start, stop, amount) {
    return (1.0 - amount) * start + amount * stop;
}

/**
 * Determine the shortest angle between two angles, measured in degrees.
 */
export function differenceDegrees(a, b) {
    return 180.0 - Math.abs(Math.abs(a - b) - 180.0);
}

/**
 * Ensure 0 <= degrees < 360
 */
export function sanitizeDegrees(degrees) {
    if (degrees < 0) {
        return (degrees % 360) + 360;
    } else if (degrees >= 360.0) {
        return degrees % 360;
    } else {
        return degrees;
    }
}

/**
 * Convert radians to degrees.
 */
export function toDegrees(radians) {
    return (radians * 180.0) / Math.PI;
}

/**
 * Convert degrees to radians.
 */
export function toRadians(degrees) {
    return (degrees / 180.0) * Math.PI;
}

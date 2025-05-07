// ---------------------------------------------------------------------------------
// Copyright 2025 Benedict Waweru
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ---------------------------------------------------------------------------------

import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MpesaPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!this.validatePhoneNumber(value)) {
      throw new BadRequestException();
    }

    return value;
  }

  validatePhoneNumber(phoneNumber: string): boolean {
    const cleanedPhoneNumber = phoneNumber
      .trim()
      .replace(/^(\+)?|[^\d]/g, (_, plus) => plus || '');


    return /^(\+254|0)(1\d{8}|7\d{8})$/.test(cleanedPhoneNumber);
  }
}

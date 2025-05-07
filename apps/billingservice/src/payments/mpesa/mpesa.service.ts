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

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import axios from 'axios';

interface MPesaTokenResponse {
  access_token: string;
}

/**
 * @class - This class handles the business logic, data access of payment with M-Pesa
 */
@Injectable()
export class MpesaService {
  constructor(private configService: ConfigService) {}

  getMPesaVariables() {
    const mpesaVariables = {
      mpesaConsumerKey: this.configService.get<string>('MPESA_CONSUMER_KEY'),
      mpesaConsumerSecretKey: this.configService.get<string>(
        'MPESA_CONSUMER_SECRET_KEY'
      ),
      mpesaBaseURL: this.configService.get<string>('MPESA_BASE_URL'),
      mpesaShortCode: this.configService.get<string>('MPESA_SHORT_CODE'),
    };

    for (const [key, value] of Object.entries(mpesaVariables)) {
      if (value === undefined) {
        throw new Error(`Missing MPesa configuration variable: ${key}`);
      }
    }

    return mpesaVariables;
  }

  private getAuthCredentials(): string {
    const { mpesaConsumerKey, mpesaConsumerSecretKey } =
      this.getMPesaVariables();

    return Buffer.from(`${mpesaConsumerKey}${mpesaConsumerSecretKey}`).toString(
      'base64'
    );
  }

  async getAccessToken(): Promise<string> {
    const auth = this.getAuthCredentials();
    const { mpesaBaseURL } = this.getMPesaVariables();

    const response = await axios.get<MPesaTokenResponse>(
      `${mpesaBaseURL}/oauth/v1/generate?grant_type=client_credentials`,
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    );

    return response.data.access_token;
  }

  // TODO: Implement with axios, not unirest
  /**
   * @method initiateSTKPush - This method is used to trigger an MPesa STK Push—a process where a payment prompt (pop-up) is sent to a user's phone asking them to authorize a transaction by entering their M-Pesa PIN.
   */
  async initiateSTKPush() {
    //
  }
}

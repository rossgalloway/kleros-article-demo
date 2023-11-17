export const badgeTcrContractConfig = {
  address: '0xCb4Aae35333193232421E86Cd2E9b6C91f3B125F',
  abi: [
    {
      constant: true,
      inputs: [],
      name: 'challengePeriodDuration',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'governor',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'arbitratorExtraData',
      outputs: [
        {
          name: '',
          type: 'bytes'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'loserStakeMultiplier',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      name: 'disputeIDToAddress',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'challengeReward',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'sharedStakeMultiplier',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'arbitrator',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'winnerStakeMultiplier',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      name: 'addresses',
      outputs: [
        {
          name: 'status',
          type: 'uint8'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'MULTIPLIER_PRECISION',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      name: 'addressList',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'arbitrationFeesWaitingTime',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          name: '_arbitrator',
          type: 'address'
        },
        {
          name: '_arbitratorExtraData',
          type: 'bytes'
        },
        {
          name: '_metaEvidence',
          type: 'string'
        },
        {
          name: '_governor',
          type: 'address'
        },
        {
          name: '_arbitrationFeesWaitingTime',
          type: 'uint256'
        },
        {
          name: '_challengeReward',
          type: 'uint256'
        },
        {
          name: '_challengePeriodDuration',
          type: 'uint256'
        },
        {
          name: '_sharedStakeMultiplier',
          type: 'uint256'
        },
        {
          name: '_winnerStakeMultiplier',
          type: 'uint256'
        },
        {
          name: '_loserStakeMultiplier',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_requester',
          type: 'address'
        },
        {
          indexed: true,
          name: '_challenger',
          type: 'address'
        },
        {
          indexed: true,
          name: '_address',
          type: 'address'
        },
        {
          indexed: false,
          name: '_status',
          type: 'uint8'
        },
        {
          indexed: false,
          name: '_disputed',
          type: 'bool'
        }
      ],
      name: 'AddressStatusChange',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_address',
          type: 'address'
        },
        {
          indexed: true,
          name: '_contributor',
          type: 'address'
        },
        {
          indexed: true,
          name: '_side',
          type: 'uint8'
        },
        {
          indexed: false,
          name: '_value',
          type: 'uint256'
        }
      ],
      name: 'Contribution',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_address',
          type: 'address'
        },
        {
          indexed: true,
          name: '_challenger',
          type: 'address'
        }
      ],
      name: 'ChallengeDepositPlaced',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_address',
          type: 'address'
        },
        {
          indexed: true,
          name: '_contributor',
          type: 'address'
        },
        {
          indexed: true,
          name: '_request',
          type: 'uint256'
        },
        {
          indexed: false,
          name: '_round',
          type: 'uint256'
        },
        {
          indexed: false,
          name: '_value',
          type: 'uint256'
        }
      ],
      name: 'RewardWithdrawal',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_metaEvidenceID',
          type: 'uint256'
        },
        {
          indexed: false,
          name: '_evidence',
          type: 'string'
        }
      ],
      name: 'MetaEvidence',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_arbitrator',
          type: 'address'
        },
        {
          indexed: true,
          name: '_disputeID',
          type: 'uint256'
        },
        {
          indexed: false,
          name: '_metaEvidenceID',
          type: 'uint256'
        }
      ],
      name: 'Dispute',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_arbitrator',
          type: 'address'
        },
        {
          indexed: true,
          name: '_disputeID',
          type: 'uint256'
        },
        {
          indexed: true,
          name: '_party',
          type: 'address'
        },
        {
          indexed: false,
          name: '_evidence',
          type: 'string'
        }
      ],
      name: 'Evidence',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: '_arbitrator',
          type: 'address'
        },
        {
          indexed: true,
          name: '_disputeID',
          type: 'uint256'
        },
        {
          indexed: false,
          name: '_ruling',
          type: 'uint256'
        }
      ],
      name: 'Ruling',
      type: 'event'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_address',
          type: 'address'
        }
      ],
      name: 'requestStatusChange',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_address',
          type: 'address'
        }
      ],
      name: 'challengeRequest',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_address',
          type: 'address'
        },
        {
          name: '_side',
          type: 'uint8'
        }
      ],
      name: 'fundLatestRound',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_address',
          type: 'address'
        },
        {
          name: '_request',
          type: 'uint256'
        },
        {
          name: '_round',
          type: 'uint256'
        }
      ],
      name: 'withdrawFeesAndRewards',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_address',
          type: 'address'
        }
      ],
      name: 'timeout',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_disputeID',
          type: 'uint256'
        },
        {
          name: '_ruling',
          type: 'uint256'
        }
      ],
      name: 'rule',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_address',
          type: 'address'
        },
        {
          name: '_evidence',
          type: 'string'
        }
      ],
      name: 'submitEvidence',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_challengePeriodDuration',
          type: 'uint256'
        }
      ],
      name: 'changeTimeToChallenge',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_challengeReward',
          type: 'uint256'
        }
      ],
      name: 'changeChallengeReward',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_governor',
          type: 'address'
        }
      ],
      name: 'changeGovernor',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_arbitrationFeesWaitingTime',
          type: 'uint256'
        }
      ],
      name: 'changeArbitrationFeesWaitingTime',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_sharedStakeMultiplier',
          type: 'uint256'
        }
      ],
      name: 'changeSharedStakeMultiplier',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_winnerStakeMultiplier',
          type: 'uint256'
        }
      ],
      name: 'changeWinnerStakeMultiplier',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_loserStakeMultiplier',
          type: 'uint256'
        }
      ],
      name: 'changeLoserStakeMultiplier',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: '_value',
          type: 'bytes32'
        }
      ],
      name: 'isPermitted',
      outputs: [
        {
          name: 'allowed',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: '_address',
          type: 'address'
        }
      ],
      name: 'getAddressInfo',
      outputs: [
        {
          name: 'status',
          type: 'uint8'
        },
        {
          name: 'numberOfRequests',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: '_address',
          type: 'address'
        },
        {
          name: '_request',
          type: 'uint256'
        }
      ],
      name: 'getRequestInfo',
      outputs: [
        {
          name: 'disputed',
          type: 'bool'
        },
        {
          name: 'disputeID',
          type: 'uint256'
        },
        {
          name: 'submissionTime',
          type: 'uint256'
        },
        {
          name: 'challengeRewardBalance',
          type: 'uint256'
        },
        {
          name: 'challengerDepositTime',
          type: 'uint256'
        },
        {
          name: 'resolved',
          type: 'bool'
        },
        {
          name: 'parties',
          type: 'address[3]'
        },
        {
          name: 'numberOfRounds',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: '_address',
          type: 'address'
        },
        {
          name: '_request',
          type: 'uint256'
        },
        {
          name: '_round',
          type: 'uint256'
        }
      ],
      name: 'getRoundInfo',
      outputs: [
        {
          name: 'appealed',
          type: 'bool'
        },
        {
          name: 'oldWinnerTotalCost',
          type: 'uint256'
        },
        {
          name: 'paidFees',
          type: 'uint256[3]'
        },
        {
          name: 'requiredForSide',
          type: 'uint256[3]'
        },
        {
          name: 'totalContributed',
          type: 'uint256[3]'
        },
        {
          name: 'feeRewards',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: '_address',
          type: 'address'
        },
        {
          name: '_request',
          type: 'uint256'
        },
        {
          name: '_round',
          type: 'uint256'
        },
        {
          name: '_contributor',
          type: 'address'
        }
      ],
      name: 'getContributions',
      outputs: [
        {
          name: 'contributions',
          type: 'uint256[3]'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'addressCount',
      outputs: [
        {
          name: 'count',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'countByStatus',
      outputs: [
        {
          name: 'disputed',
          type: 'uint256'
        },
        {
          name: 'absent',
          type: 'uint256'
        },
        {
          name: 'registered',
          type: 'uint256'
        },
        {
          name: 'registrationRequested',
          type: 'uint256'
        },
        {
          name: 'clearingRequested',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: '_cursor',
          type: 'address'
        },
        {
          name: '_count',
          type: 'uint256'
        },
        {
          name: '_filter',
          type: 'bool[8]'
        },
        {
          name: '_oldestFirst',
          type: 'bool'
        }
      ],
      name: 'queryAddresses',
      outputs: [
        {
          name: 'values',
          type: 'address[]'
        },
        {
          name: 'hasMore',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }
  ]
} as const

export const tokensViewContractConfig = {
  address: '0xf9b9b5440340123b21bff1ddafe1ad6feb9d6e7f',
  abi: [
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: '_t2crAddress', type: 'address' },
        {
          internalType: 'address[]',
          name: '_tokenAddresses',
          type: 'address[]'
        }
      ],
      name: 'getTokensIDsForAddresses',
      outputs: [
        { internalType: 'bytes32[]', name: 'result', type: 'bytes32[]' }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: '_t2crAddress', type: 'address' },
        { internalType: 'bytes32[]', name: '_tokenIDs', type: 'bytes32[]' }
      ],
      name: 'getTokens',
      outputs: [
        {
          components: [
            { internalType: 'bytes32', name: 'ID', type: 'bytes32' },
            { internalType: 'string', name: 'name', type: 'string' },
            { internalType: 'string', name: 'ticker', type: 'string' },
            { internalType: 'address', name: 'addr', type: 'address' },
            { internalType: 'string', name: 'symbolMultihash', type: 'string' },
            {
              internalType: 'enum IArbitrableTokenList.TokenStatus',
              name: 'status',
              type: 'uint8'
            },
            { internalType: 'uint256', name: 'decimals', type: 'uint256' }
          ],
          internalType: 'struct TokensView.Token[]',
          name: 'tokens',
          type: 'tuple[]'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }
  ]
} as const

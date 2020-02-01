import pandas as pd
import sys


class read_helper:
    def __init__(self, address):
        try:
            self.df = pd.read_csv(address, sep=',', header=None)
        except:
            self.df = None

    def getColumn(self):
        if self.df is not None:
            return self.df.to_dict()
        else:
            return None

    def getRow(self):
        if self.df is not None:
            self.stf = self.df.T
            return self.stf.to_dict()
        else:
            return None


if __name__ == "__main__":
    a = read_helper('test.csv')
    a.get()

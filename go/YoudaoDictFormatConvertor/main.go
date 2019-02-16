package main

import (
	"os"
	"io/ioutil"
	"strings"
	"bytes"
	"encoding/binary"
	"encoding/hex"
)

func main(){
	filPath := `C:\Users\admin1\Desktop\youdao-dict.txt`
 	if len(os.Args) >= 2{
		filPath = os.Args[1]
	}

	data, err := ioutil.ReadFile(filPath)
	if err != nil {
		println("fail to read file:"+err.Error())
		os.Exit(-1)
	}
	utf8Lines := strings.Replace(string(data), "\r\n", "\n", -1)
	lines := strings.Split(utf8Lines,"\n")
	ret := ""
	for l:= range lines{
		println(lines[l])
		if len(lines[l]) >0 && ( lines[l][0] >= '0' && lines[l][0] <='9'){
			start := strings.Index(lines[l], ",")+1
			end := strings.Index(lines[l], "[")
			line :=""
			if end == -1{
				line = lines[l][start: ]
			}else{
				line = lines[l][start:end]
			}
			temp := lines[l][start:]
			print(temp)
			line = strings.Trim(line," ")+"\n"
			ret = ret + line
			//end := strings.Index(lines[l], "[")
			//println(lines[l])
			//if end != -1{
			//	ret += lines[l][start:end]
			//}else{
			//	ret += lines[l][start:]
			//}

		}
		//else{
		//	ret += " "+lines[l]
		//}
	}

	println(ret)
	var bytes = []byte(ret)
	ioutil.WriteFile(`C:\Users\admin1\Desktop\do-not-remember-words.txt`, bytes, 0666)
}

func u2s(form string) (to string, err error) {
	bs, err := hex.DecodeString(strings.Replace(form, `\u`, ``, -1))
	if err != nil {
		return
	}
	for i, bl, br, r := 0, len(bs), bytes.NewReader(bs), uint16(0); i < bl; i += 2 {
		binary.Read(br, binary.BigEndian, &r)
		to += string(r)
	}
	return
}
/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const styles = theme => ({
  table: {
    fontSize: 14,
    width: "100%",
    borderCollapse: "collapse",
    "& tr": {},
    "& th": {
      padding: "7px 20px",
      textAlign: "left",
      height: "52px",
      ...theme.hv.typography.highlightText,
      background: theme.hv.palette.atmosphere.atmo1,
      borderBottom: `1px solid ${theme.hv.palette.atmosphere.atmo5}`,
      verticalAlign: "top"
    },
    "& td": {
      padding: "0 20px",
      ...theme.hv.typography.normalText,
      lineHeight: "32px",
      minWidth:"150px",
      borderBottom: `1px solid ${theme.hv.palette.atmosphere.atmo5}`
    }
  },
  list: {
    paddingLeft: "10px"
  },
  shape: {
    listStyleType: "none",
    paddingInlineStart: "10px",
    margin: 0
  },
  enum: {
    listStyleType: "none",
    paddingLeft: "10px",
    margin: 0
  },
  deprecated: {
    textDecoration: "line-through"
  }
});

export default styles;

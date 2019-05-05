/**
 *
 * Mention
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {MentionStyle} from "./_style";
/* eslint-disable react/prefer-stateless-function */
class Mention extends React.Component {
  render() {
    const {className, ref, multiLines,loading, style, onChange, placeholder,prefix,onSearchChange,suggestions,onSelect,value} = this.props;
    return (
    <MentionStyle>
       <Mention
            className={className}
            ref={ref}
            multiLines={multiLines}
            loading={loading}
            style={style}
            onChange={onChange}
            placeholder={placeholder}
            prefix={prefix}
            onSearchChange={onSearchChange}
            suggestions={suggestions}
            onSelect={onSelect}
            value={value}
                />
    </MentionStyle>
      );
  }
}

Mention.propTypes = {};

export default Mention;
